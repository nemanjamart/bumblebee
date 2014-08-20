import os
import requests
from urllib import urlencode
from flask import Flask, request
app = Flask(__name__,static_folder='src')


def solr(request):
  headers = request.headers
  payload = dict(request.args)
  #payload = cleanup_solr_request(payload)
  headers = dict(headers.items())
  headers['Content-Type'] = 'application/x-www-form-urlencoded'
  r = requests.post('http://localhost:8983/solr/search', data=urlencode(payload, doseq=True), headers=headers)
  return r.text, r.status_code

@app.route('/',defaults={'path': ''})
@app.route('/<path:path>',methods=['GET','POST'])
def catch_all(path):
    if path.startswith('api'):
      return solr(request)

    tmpl = '''
       <html><script>window.location="/#%s"</script></html>
    ''' % path
    return tmpl

if __name__ == '__main__':
  app.run(host="0.0.0.0",port=4999,debug=True)
