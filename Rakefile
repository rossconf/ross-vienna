task default: %w[test]

task :server do
  puts "Installing Bower components..."
  Rake::Task["bower"].invoke
  puts "\nStarting Development Server..."
  try "bundle exec middleman server"
end

task :bower do
  try "bower install"
end

task :test do
  puts "\nBuilding project"
  Rake::Task["bower"].invoke
  try "bundle exec middleman build --verbose"
end

task :deploy do
  puts "\nDeploying to GitHub"
  Rake::Task["bower"].invoke
  try "bundle exec middleman deploy"
end

## Helper so we fail as soon as a command fails.
def try(command)
  system command
  if $? != 0 then
    raise "Command: `#{command}` exited with code #{$?.exitstatus}"
  end
end
