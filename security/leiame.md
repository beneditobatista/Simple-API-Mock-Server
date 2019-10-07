
*** Geracao de certificado ssl auto assinado

Entre na pasta /security

** Digite os seguintes comandos no terminal

1 - 

openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout server_dev.key -out server_dev.crt \
  -subj "/C=US/ST=CA/L=Irvine/O=Acme Inc./CN=localhost" \
  -reqexts v3_req -reqexts SAN -extensions SAN \
  -config \
  <(echo -e '
    [req]\n
    distinguished_name=req_distinguished_name\n
    [req_distinguished_name]\n
    [SAN]\n
    subjectKeyIdentifier=hash\n
    authorityKeyIdentifier=keyid:always,issuer:always\n
    basicConstraints=CA:TRUE\n
    subjectAltName=IP:10.0.2.2
  ')

2 - 
openssl x509 -in server_dev.crt -outform der -out server_dev.der.crt


Insira o certifcado geradop no android do seu emulador

Para mais informacoes acesse:

  https://medium.com/@noumaan/ssl-app-dev-a2923d5113c6

  