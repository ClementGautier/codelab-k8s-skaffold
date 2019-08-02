from starlette.responses import JSONResponse


def HelloWorld(request, **kwargs):
    return JSONResponse({'hello': 'world'})
