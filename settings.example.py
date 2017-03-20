DEBUG = True
HOST = '0.0.0.0'
PORT = 5000

# MongoDB connection settings
DATABASE = {
  'db': 'neomad',
  'username': 'root',
  'host': 'db',  # docker-compose MongoDB link name
  'password': '',
  'port': 27017,
}

DEBUG_TB_ENABLED = DEBUG

DEBUG_TB_PANELS = (
    'flask_debugtoolbar.panels.versions.VersionDebugPanel',
    'flask_debugtoolbar.panels.timer.TimerDebugPanel',
    'flask_debugtoolbar.panels.headers.HeaderDebugPanel',
    'flask_debugtoolbar.panels.request_vars.RequestVarsDebugPanel',
    'flask_debugtoolbar.panels.template.TemplateDebugPanel',
    'flask_debugtoolbar.panels.logger.LoggingPanel',
    'flask_debugtoolbar.panels.route_list.RouteListDebugPanel',
    'flask_mongoengine.panels.MongoDebugPanel',
)

DEBUG_TB_INTERCEPT_REDIRECTS = False

SECRET_KEY = 'mysecretkey'
