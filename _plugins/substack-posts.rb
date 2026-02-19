# frozen_string_literal: true

require 'yaml'
require 'time'
require 'jekyll'

module SubstackPosts
  # Reads _data/substack_posts.yml (populated by _scripts/fetch_substack.py)
  # and creates Jekyll post documents so Substack posts appear in the blog
  # listing alongside native posts, with a redirect to the original URL.
  class Generator < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      data_file = File.join(site.source, '_data', 'substack_posts.yml')
      return unless File.exist?(data_file)

      posts = YAML.load_file(data_file, permitted_classes: [Time, Date]) || []
      posts.each { |post| create_document(site, post) }
    end

    private

    def create_document(site, post)
      title = post['title'].to_s.strip
      url   = post['url'].to_s.strip
      return if title.empty? || url.empty?

      slug = title.downcase.gsub(/\s+/, '-').gsub(/[^\w-]/, '').slice(0, 200)
      path = site.in_source_dir("_posts/#{slug}.md")

      doc = Jekyll::Document.new(path, site: site, collection: site.collections['posts'])
      doc.data.merge!(
        'external_source' => 'Substack',
        'title'           => title,
        'description'     => post['description'].to_s,
        'date'            => parse_date(post['date']),
        'redirect'        => url
      )
      site.collections['posts'].docs << doc
    end

    def parse_date(value)
      Time.parse(value.to_s).utc
    rescue ArgumentError, TypeError
      Time.now.utc
    end
  end
end
