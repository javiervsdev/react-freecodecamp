class TestimonioContent {
    constructor(nombre, pais, imagen, cargo, empresa, testimonio) {
        this.nombre = nombre;
        this.pais = pais;
        this.imagen = imagen;
        this.cargo = cargo;
        this.empresa = empresa;
        this.testimonio = testimonio;
    }
}

const testimonios = [
    new TestimonioContent(
        'Emma Bostian',
        'Suecia',
        'emma',
        'Ingeniera de Software',
        'Spotify',
        'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'),
    new TestimonioContent(
        'Shawn Wang',
        'Singapur',
        'shawn',
        'Ingeniero de Software',
        'Amazon',
        'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'),
    new TestimonioContent(
        'Sarah Chima',
        'Nigeria',
        'sarah',
        'Ingeniero de Software',
        'ChatDesk',
        'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.')
]

export default testimonios;