function AcercaDe() {
    return (
        <>
            <section className="py-5 sm:grid sm:grid-cols-3 sm:justify-center sm:items-center screen">
                <div className="flex justify-center items-center col-start-1 col-end-2 heigth overflow-hidden">
                    <img src="/octa-removebg.png" alt="Fundador de Octagon" className="size rounded-sm" />
                </div>
                <div className="py-5 px-1 col-start-2 col-end-4">
                    <h2 className="text-xl my-3">HOLA SOY CRlSTlAN, CREADOR Y FUNDADOR DE OCTAGON.</h2>
                    <p>A lo largo de mi vida, he construido un camino enriquecedor, donde la programación, las tecnologías, las finanzas, los negocios y la comprensión del comportamiento humano han sido mis pilares fundamentales, es por ello que este blog solamente proporciona información aprobada por un experto.</p>
                    <p><strong>Mi Trayectoria</strong></p>
                    <ul className="list-disc list-inside ml-4">
                        <li>Programación y Tecnologías: Desde mis inicios, he explorado el fascinante mundo de la programación, perfeccionando mi habilidad para crear soluciones innovadoras y tecnológicamente avanzadas.</li>
                        <li>Finanzas y Negocios: Más allá de la tecnología, mi curiosidad me llevó al ámbito financiero y empresarial. He aplicado estrategias sólidas para lograr el éxito en proyectos empresariales.</li>
                        <li>Éxito y Desarrollo Personal: El éxito no solo radica en los proyectos, sino también en comprender el comportamiento humano. Esta perspectiva ha sido clave para construir relaciones sólidas y liderar equipos de manera efectiva.</li>
                    </ul>
                    <p>Te invito a explorar más sobre mis proyectos y logros en mi <a href="#"><strong className="text-blue-600">Portafolio Web</strong></a> donde encontrarás un reflejo de mi pasión y dedicación en cada proyecto.</p>
                </div>
            </section>
        </>
    );
}

export default AcercaDe