import service from "./service";

function autenticar(email, senha){
    return  new Promise((resolve, reject)  => {
        service.post('/login', {email, senha})
        .then(response => resolve(response))
        .catch(erro  => reject(erro))
    });
};

function salvarToken(token){
    localStorage.setItem('token', token);
}

function salvarUsuario(usuario){
    localStorage.setItem("usuario", JSON.stringify(usuario));
}

function obterToken(){
return localStorage.getItem('token');
}

function obterUsuario(){
    return localStorage.getItem('usuario');
}

function sairDoSistema(){
localStorage.removeItem('token');
localStorage.removeItem('usuario');
window.open('/login', '_self');
}

export default {
    autenticar,
    salvarToken,
    salvarUsuario,
    obterToken,
    obterUsuario,
    sairDoSistema
}