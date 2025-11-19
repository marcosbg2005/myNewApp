const opciones = document.querySelector('#opciones-iniciales');
const panelLogin = document.querySelector('#panel-login');
const panelRegistro = document.querySelector('#panel-registro');
const btnLogin = document.querySelector('#btn-mostrar-login');
const btnRegistro = document.querySelector('#btn-mostrar-registro');

const activarPanel = (panel) => {
  opciones.classList.add('oculto');

  [panelLogin, panelRegistro].forEach(p => {
    p.classList.add('oculto');
    p.classList.remove('panel-activo');
  });

  panel.classList.remove('oculto');
  panel.classList.add('panel-activo');
};

const volverAlInicio = () => {
  [panelLogin, panelRegistro].forEach(p => {
    p.classList.add('oculto');
    p.classList.remove('panel-activo');
  });
  opciones.classList.remove('oculto');
};

btnLogin.addEventListener('click', () => activarPanel(panelLogin));
btnRegistro.addEventListener('click', () => activarPanel(panelRegistro));

document.querySelectorAll('.btn-cancelar').forEach(boton => {
  boton.addEventListener('click', volverAlInicio);
});

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulario enviado');
    volverAlInicio();
  });
});