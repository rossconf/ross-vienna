task default: %w[test]

task :server do
  # puts "Installing Bower components..."
  # Rake::Task["bower"].invoke
  puts "\nStarting Development Server..."
  try "bundle exec middleman server"
end

task :bower do
  # try "bower install"
end

task :test do
  puts "\nBuilding project"
  # Rake::Task["bower"].invoke
  try "bundle exec middleman build --verbose"
end

task :deploy do
  puts "\nDeploying to GitHub"
  # Rake::Task["bower"].invoke
  try "bundle exec middleman deploy"
end

namespace :travis do
  task :script do
    Rake::Task["test"].invoke
  end

  task :after_success do
    puts "\nRunning Travis Deployment"
    puts "\nSetting up Git access"
    try "git config --global user.name ${GHUSER}"
    try "git config --global user.email ${GHUSERMAIL}"
    try "git remote set-url origin https://${GH_TOKEN}:x-oauth-basic@${GH_REPO}"

    Rake::Task["deploy"].invoke
  end
end

## Helper so we fail as soon as a command fails.
def try(command)
  system command
  if $? != 0 then
    raise "Command: `#{command}` exited with code #{$?.exitstatus}"
  end
end
