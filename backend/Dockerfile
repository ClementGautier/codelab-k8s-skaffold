FROM python:3 AS development

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD uvicorn main:app --reload --host=0.0.0.0 --port=8000

FROM python:alpine AS production

RUN apk add --no-cache --virtual .build-deps gcc libc-dev make \
  && pip install uvicorn gunicorn \
  && apk del .build-deps gcc libc-dev make

ENV DEBUG=false

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD uvicorn main:app --host=0.0.0.0 --port=8000
