# Consultas

Rama consultas del sitio web www.pjecz.gob.mx.

## Requerimientos

Requiere Python 3.11 o superior y Poetry 1.8.

## Instalación

Crear el entorno virtual

```bash
python3.11 -m venv .venv
```

Ingresar al entorno virtual

```bash
source venv/bin/activate
```

Actualizar el gestor de paquetes **pip**

```bash
pip install --upgrade pip
```

Instalar el paquete **wheel** para compilar las dependencias

```bash
pip install wheel
```

Revisar si tiene **poetry** y la que la version sea menor a 2

```bash
poetry --version
```

## Configuración

Crear un archivo `.bashrc` que se ejecute al iniciar la terminal

```bash
# constructor-web-pjecz-gob-mx

if [ -f ~/.bashrc ]
then
    . ~/.bashrc
fi

if command -v figlet &> /dev/null
then
    figlet Consultas pjecz.gob.mx
else
    echo "== Consultas pjecz.gob.mx"
fi
echo

if [ -d .venv ]
then
    echo "-- Python Virtual Environment"
    source .venv/bin/activate
    echo "   $(python3 --version)"
    export PYTHONPATH=$(pwd)
    echo "   PYTHONPATH: ${PYTHONPATH}"
    echo
    echo "-- Poetry"
    export PYTHON_KEYRING_BACKEND=keyring.backends.null.Keyring
    echo "   $(poetry --version)"
    echo
    echo "-- Pelican"
    alias construir="pelican content"
    alias reconstruir="pelican --delete-output-directory content"
    alias servir="pelican --listen content"
    alias desarrollar="pelican --autoreload --listen content"
    alias publicar="pelican --settings publishconf.py content"
    echo "   construir"
    echo "   reconstruir"
    echo "   servir"
    echo "   desarrollar"
    echo "   publicar"
    echo
fi
```
