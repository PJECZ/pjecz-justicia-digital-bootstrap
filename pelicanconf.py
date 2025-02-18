"""
Pelican development configuration file
"""

# Tema
THEME = "themes/pjecz-2025-01"

# Nombre de esta rama hecha con Pelican que se usa en el title de la pagina
SITENAME = "Consultas - Poder Judicial del Estado de Coahuila de Zaragoza"

# URL base para desarrollador (porque la API va a usar el puerto 8000)
SITEURL = "http://localhost:5000"

# URL base que se usa el menu principal y en los enlaces del pie de pagina
PRINCIPAL_URL = "https://www.pjecz.gob.mx"

# Metadatos de todo el sitio web
SITENAME = "Poder Judicial del Estado de Coahuila de Zaragoza"
SITELOGO = "theme/images/pjecz.png"
SITEPREVIEW = "theme/images/generic.jpg"
SITEDESCRIPTION = "Responsables de impartir justicia en el Estado, de dirimir diferencias entre particulares, de conciliar, y de promover con el ejemplo una cultura de la legalidad y justicia cotidiana."
SITETWITTER = "@PJCoah"

# Autor por defecto
AUTHOR = "Direccion de Informatica del PJECZ"

# NO usa articulos
ARTICLE_PATHS = []

# Paginas atemporales, que no son articulos
PAGE_PATHS = ["consultas"]

# Rutas y archivos con contenidos estaticos que deben ser copiados
# Agregue también los directorios que tienen archivos para artículos y páginas
STATIC_PATHS = ["favicon.ico", "robots.txt", "consultas"]

# Al colocar un articulo, la cetegoria se toma del nombre de la carpeta
USE_FOLDER_AS_CATEGORY = True
DEFAULT_CATEGORY = "consultas"

# Zona horaria
TIMEZONE = "America/Mexico_City"

# La generacion de fuentes RSS y Atom esta deshabilitada
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Tampoco se van a generar listas de autores, categorias y tags
DIRECT_TEMPLATES = ["index"]

# Plugins, se usa pelican_javascript para incluir archivos JavaScript en las consultas
PLUGIN_PATHS = ["plugins"]
PLUGINS = ["pelican_javascript"]

# Puerto 5000 para desarrollador (porque la API va a usar el puerto 8000)
PORT = 5000
