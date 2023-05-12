lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

require 'rake/testtask'
require 'json'
require 'yaml'
require 'open-uri'
#require 'html-proofer'

desc 'Display all known versions of the Tres API'
task :versions do
  versions = {
    api_dev: 'https://api-dev.trestechnologies.com/version',
    api_dev_staging: 'https://api-dev-staging.trestechnologies.com/version',
    api: 'https://api.trestechnologies.com/version'
  }
  
  versions.each do |k, v|
    version = JSON[URI.open(v).read]['version']
    
    puts "#{k}: #{version}"
  end
end

desc 'Import api markdown.'
task :import, :folder do |t, args|
  folder = args[:folder] || abort('Folder required.')
  dir = Dir.entries(folder)
  
  csproj = if folder.end_with?("Generated/")
    File.new("#{folder}../../../TresTechnologies.App.Server.Http.csproj", 'r').read
  else
    File.new("#{folder}../../TresTechnologies.App.Server.Http.csproj", 'r').read
  end
  
  assembly_version = csproj.scan(/<AssemblyVersion>(.*)<\/AssemblyVersion>/).flatten[0]
  
  dir.each do |f|
    next unless f.end_with? '.md'
    next if f =~ /0.9.5 changes.md/
    
    File.open(folder + "/" + f) do |file|
      data = file.read
      title = data.split("# ")[1].split("\n").first
      body = data.split("# #{title}")[1]

      if body.nil?
        puts "Skipping #{f} (empty body)"
        next
      end

      skip = false
      
      description = body.lstrip.split("\n").first.split(".").first rescue ""
      description = "" if description.start_with? 'Referenced Table:'
      description = "" if description.start_with? 'Permission Areas:'
      description = "" if description == '| Column | Type | Size | Table | Description |' # <- Search table
      description = "" if description == '| Parameter | Type |' # <- Afffiliation marketing parameters
      description = "" if description == '| Column | Type | Size | Flags | Table | Description |' # <- Everything else
      
      body = body.gsub(/\[([a-zA-Z]+)\]\(\/([a-zA-Z]+)\.html\)/) do |_|
        match = Regexp.last_match
        v = match[1]
        v = v[0].upcase + v[1..-1]
        
        "[#{v}]({{ '/api/#{v}.html' | relative_url }})"
      end
      
      # Not yet provided
      body = body.gsub(/\[`includeColsExtended\[\]`\]\(includeColsExtended\)/, '`includeColsExtended[]`')
      body = body.gsub(/\[`DateSearchParam`\]\(DateSearchParam\)/, '`DateSearchParam`')
      body = body.gsub(/\[`DateTimeSearchParam`\]\(DateTimeSearchParam\)/, '`DateTimeSearchParam`')
      body = body.gsub(/\[`DateTimeUTCSearchParam`\]\(DateTimeUTCSearchParam\)/, '`DateTimeUTCSearchParam`')
      body = body.gsub(/\[`TagsSearch`\]\(TagsSearch\)/, '`TagsSearch`')
      body = body.gsub(/\[`TagsSearchParams\[\]`\]\(TagsSearchParams\)/, '`TagsSearchParams[]`')
      body = body.gsub(/\[`ActivitySearchParams`\]\(ActivitySearchParams\)/, '`ActivitySearchParams`')
      body = body.gsub(/\[`TripSearchParams`\]\(TripSearchParams\)/, '`TripSearchParams`')
      body = body.gsub(/\[`ProfileSearchParams`\]\(ProfileSearchParams\)/, '`ProfileSearchParams`')
      body = body.gsub(/\[`DestinationSearchParams`\]\(DestinationSearchParams\)/, '`DestinationSearchParams`')
      body = body.gsub(/\[`EnumSearchParam<([a-zA-Z]+)>`\]\(EnumSearchParam\)/) do |_|
        match = Regexp.last_match
        v = match[1]
        
        "`EnumSearchParam<#{v}>`"
      end
      
      output = <<~DONE
        ---
        layout: api_page
        title: "#{title}"
        description: "#{description}"
        assembly_version: "#{assembly_version}"
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

desc 'Run site locally.'
task :run do
  baseurl = ENV.fetch('BASEURL', '/')
  cmd = 'JEKYLL_ENV=development bundle exec jekyll server --incremental --host 0.0.0.0 --destination _site'
  
  if !!baseurl && baseurl != '/'
    cmd += " --baseurl #{baseurl}"
  end
  
  sh cmd
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
