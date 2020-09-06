activate :deploy do |deploy|
  deploy.method = :git
  committer_app = "#{Middleman::Deploy::PACKAGE} v#{Middleman::Deploy::VERSION}"
  commit_message = "Deployed using #{committer_app}"

  deploy.commit_message = commit_message
end

set :site_name,      "ROSS conf"
set :analytics_code, "UA-60869001-1"

activate :directory_indexes

activate :blog do |blog|
  blog.prefix  = "blog"
  blog.layout  = "blog"
  blog.permalink = "{year}-{month}/{title}/index.html"
end

configure :development do
  activate :disqus do |d|
    d.shortname = "rossconfdev"
  end
end

configure :build do
  activate :disqus do |d|
    d.shortname = "rossconf"
  end
end

# We'll leave this here as an example of how to proxy something
#
#data.events.each do |city, event|
  #proxy "event/#{city.downcase}/index.html", "/event.html", :locals => { :event => event }
#end

configure :development do
  activate :livereload
end

helpers do
  def md2(source)
    Tilt::KramdownTemplate.new { source }.render
  end
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
sprockets.append_path File.join root, 'bower_components'

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
end

helpers do
  def blog_post_image(article, name)
    "/blog/#{article.date.year}-#{article.date.strftime('%m')}-#{article.slug}/#{name}"
  end
end
