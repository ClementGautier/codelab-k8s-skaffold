from starlette.responses import JSONResponse


def Version(request, **kwargs):
    return JSONResponse({'version': 1.0})
