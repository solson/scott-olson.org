require 'rake/clean'

desc "deploy site to scott-olson.org"
task :deploy => [:clobber, :build] do
  sh "rsync -e ssh -avz --delete _site/ dh:scott-olson.org/www"
end

desc "generate the static site files"
task :build do
  sh "jekyll --no-auto"
end

CLOBBER.include('_site')

