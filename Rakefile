lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

require 'rake/testtask'
require 'json'
require 'yaml'
require 'hive'
require 'open-uri'
#require 'html-proofer'

desc 'Import api markdown.'
task :import, :folder do |t, args|
  folder = args[:folder] || abort('Folder required.')
  dir = Dir.entries(folder)
  
  dir.each do |f|
    next unless f.end_with? '.md'
    
    File.open(folder + "/" + f) do |file|
      data = file.read
      title = data.split("# ")[1].split("\n").first
      description = data.split("# #{title}")[1].lstrip.split("\n").first.split(".").first
      body = data.split("# #{title}")[1]
      skip = false
      
      description = "" if description.start_with? 'Referenced Table:'
      description = "" if description == '| Column | Type | Size | Table | Description |'
      description = "" if description == '| Column | Type | Size | Flags | Table | Description |'
      
      output = <<~DONE
        ---
        layout: api_page
        title: "#{title}"
        description: "#{description}"
        ---
        #{body}
      DONE
      
      new_page_path = "_api/#{f}"
      
      if File.file? new_page_path
        File.open(new_page_path, mode: 'r') do |f|
          skip = true if f.read == output
        end
      end
      
      next if skip
      
      File.open(new_page_path, mode: 'w') do |f|
        f.write(output)
      end
      
      puts "Wrote to: #{new_page_path} - title: #{title}; description: #{description}"
    end
  end
end

desc 'List of all api.'
task :list do
  Dir.glob("_api/*").sort_by{|f| f}.each do |filename|
    next if File.directory? filename
    
    page = File.open(filename).read
    
    puts page.split('title: ').last.split("\n").first.split("\"")[1]
  end
end

desc 'Build site for release.'
task :build do
  baseurl = ENV.fetch('BASEURL', '/')
  cmd = 'JEKYLL_ENV=production bundle exec jekyll build --destination _site'
  
  if !!baseurl && baseurl != '/'
    cmd += " --baseurl #{baseurl}"
  end
  
  sh cmd
end

desc 'Commit site.  Note, this is performed automatically by github.'
task commit: [:build] do
  cmd = 'git add _site && git commit _site -m "jekyll base sources"'
    
  sh cmd
end
