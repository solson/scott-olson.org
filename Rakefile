desc "deploy site to scott-olson.org"
task :deploy => [:build] do
  sh "scp -r _site/* dh:scott-olson.org/www"
end

desc "generate the static site files"
task :build do
  sh "jekyll --no-auto"
end

