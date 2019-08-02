from starlette.middleware.cors import CORSMiddleware
import uvicorn
from src.version import Version
from src.home import HelloWorld
from starlette.applications import Starlette
from starlette.config import Config

config = Config(".env")

app = Starlette()
app.debug = config('DEBUG', cast=bool, default=False)
app.add_middleware(CORSMiddleware, allow_origins=['*'])

app.add_route('/', HelloWorld, methods=["GET"])
app.add_route('/version', Version, methods=["GET"])
