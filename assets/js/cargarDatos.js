
/* menu  */
const logo = document.getElementById('logo_url');
/* ------------ URL ----------------------- */
const resena = document.getElementById('reseña');
const misionVision = document.getElementById('mision_vision');
const reglamento = document.getElementById('reglamento');
const valores = document.getElementById('valores');
const directorio = document.getElementById('directorio');
const organigrama = document.getElementById('organigrama');

const menuProgramas = document.getElementById('menu-programas');

const admision = document.getElementById('admision');
const matriculas = document.getElementById('matriculas');
const aulaVirtual = document.getElementById('aula_virtual');
const bilbiotecaVirtual= document.getElementById('biblioteca_virtual');
const titulacion = document.getElementById('titulacion');
const centroAplicacion = document.getElementById('centro_aplicacion');
const proyectoProductivo = document.getElementById('proyecto_productivo');
const proyectoEspecializacion= document.getElementById('proyecto_especializacion');
const proyectoFormacion = document.getElementById('proyecto_formacion');
const nivelacionAcademica= document.getElementById('nivelacion_academica');
const continua= document.getElementById('continua');

const resolucionValidacion = document.getElementById('resolucion_validacion');
const convenios = document.getElementById('convenios');
const comunicados = document.getElementById('comunicanos');
const documentosGestion = document.getElementById('documentos_gestion');
const publicaciones = document.getElementById('publicaciones');
const calendarioActividades= document.getElementById('calendario_actividades');

const tramites = document.getElementById('tramites');
const convocatoriaDocentes= document.getElementById('convocatoria_docentes');
const bolsaTrabajo= document.getElementById('bolsa_trabajo');
const servicios= document.getElementById('servicios');

const galeria = document.getElementById('galeria"');
const noticias = document.getElementById('noticias');
const contactenos = document.getElementById('contactenos');

/* Sobre nosotros */
const sobreNosotrosUrl = document.getElementById('sobre_nosotros_url');

/* Programas de estudio */

/* Servivios academicos internos */
const servicioAcademico1Url = document.getElementById('servicio_academico_1');
const servicioAcademico2Url = document.getElementById('servicio_academico_2');

/* Nuestros docentes */
const DocentesUrl = document.getElementById('sobre_nosotros_btn');

/* Enlaces de Interes */
const enlace1 = document.getElementById('enlace_1');
const enlace2 = document.getElementById('enlace_2');
const enlace3 = document.getElementById('enlace_3');
const enlace4 = document.getElementById('enlace_4');
const enlace5 = document.getElementById('enlace_5');
const enlace6 = document.getElementById('enlace_6');

/* Footer */
const logoFooter = document.getElementById('logo_footer');
const footerDescripcion = document.getElementById('footer_descripcion');
const footerDireccion = document.getElementById('footer_direcion');
const footerHorario = document.getElementById('footer_horario');
const footerLlamanos = document.getElementById('footer_llamanos');
const footerWsp = document.getElementById('footer_wsp');




cargarDatos()

function cargarDatos() {
    fetch('/assets/js/datos.json')
        .then(response => response.json())
        .then(dato => {
            logo.src = `${dato[0].logo_url}`;
            resena.src = `${dato[0]["nosotros"].reseña_url}`;
            misionVision.src = `${dato[0]["nosotros"].mision_vision}`;
            reglamento.src = `${dato[0]["nosotros"].reglamento_url}`;
            valores.src = `${dato[0]["nosotros"].valores_url}`;
            directorio.src = `${dato[0]["nosotros"].directorio_url}`;
            organigrama.src = `${dato[0]["nosotros"].organigrama_url}`;
            logoFooter.src = `${dato[0].logo_url}`;
            

            enlace1.src = `${dato[7].enlaces[0].imagen_url}`;
            enlace2.src = `${dato[7].enlaces[1].imagen_url}`;
            enlace3.src = `${dato[7].enlaces[2].imagen_url}`;
            enlace4.src = `${dato[7].enlaces[3].imagen_url}`;
            enlace5.src = `${dato[7].enlaces[4].imagen_url}`;
            enlace6.src = `${dato[7].enlaces[5].imagen_url}`;
            /*
            const content = document.createElement('div');
            const dataProgramas = dato[0]["programas"].forEach(element => {
                content.innerHTML = `
                <li>
                    <ul>
                        <li class="mega-menu-title"></li>
                        <li class="single-shopping-cart">
                            <a href="#">
                                <div class="shopping-cart-img">
                                    <a href="#"><img alt="" src="${element.url}" width="160" height="130"  style="border-radius:15px"></a>
                                </div>
                                <h4><a href="#">${element.nombre} </a></h4>
                            </a>
                        </li>
                    </ul>
                </li>
                `
            });
            menuProgramas.appendChild(content)
            /*
            dato.map(result =>{          
                console.log(result)
            })*/
        });
}