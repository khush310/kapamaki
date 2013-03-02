require 'catapult'

use Catapult::TryStatic,
    :root => Catapult.root.join('public'),
    :urls => %w[/],
    :try  => ['.html', 'index.html', '/index.html']

run lambda {|env|
  [404, {}, ['Not found']]
}
