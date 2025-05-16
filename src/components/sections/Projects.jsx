import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
                            <RevealOnScroll>
        
        <div className="max-w-5xl mx-auto px-4">     
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {""}
                Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-blod mb-2">PlantRo</h3>
                <p className="text-gray-400 mb-4">
                    An application to determine the crop rotation suitable for planting based on soil Ph, rainfall, and soil content.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {["Kotlin", "Java", "Python", "Google Cloud"].map((tech,key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    ">
                    {tech}
                    </span>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                    <a 
                    href="https://github.com/Capstone-Ps109/PlantRo" 
                    className="text-blue-400 hover:text-blue-500 transition colors my-4"
                    >
                        {""}
                        View Project ▶️ {""}
                    </a>
                </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-blod mb-2">Movieland</h3>
                <p className="text-gray-400 mb-4">
Movieland adalah web untuk menonton film yang dibuat secara berkelompok untuk memenuhi nilai pada mata kuliah pemrograman web                </p>
                <div className="py-4">
                    {["PHP", "JavaScript", "HTML", "CSS", "MySQL"].map((tech,key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    ">
                    {tech}
                    </span>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                    <a 
                    href="https://github.com/nrhdyt3012/movieland" 
                    className="text-blue-400 hover:text-blue-500 transition colors my-4"
                    >
                        {""}
                        View Project ▶️ {""}
                    </a>
                </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-blod mb-2">DicodingStory</h3>
                <p className="text-gray-400 mb-4">
Aplikasi yang dibuat untuk memenuhi tugas dicoding terkait belajar pengembangan aplikasi android interrmediate  
                    </p>
              <div className="py-4">
                    {["Kotlin"].map((tech,key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    ">
                    {tech}
                    </span>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                    <a 
                    href="https://github.com/nrhdyt3012/DicodingStory" 
                    className="text-blue-400 hover:text-blue-500 transition colors my-4"
                    >
                        {""}
                        View Project ▶️ {""}
                    </a>
                </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                <h3 className="text-xl font-blod mb-2">Asclepius</h3>
                <p className="text-gray-400 mb-4">
Aplikasi yang dibuat untuk memenuhi tugas dicoding terkait belajar penerapan machine learning aplikasi android                    </p>
              <div className="py-4">
                    {["Kotlin"].map((tech,key) => (
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    ">
                    {tech}
                    </span>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                    <a 
                    href="https://github.com/nrhdyt3012/Asclepiusy" 
                    className="text-blue-400 hover:text-blue-500 transition colors my-4"
                    >
                        {""}
                        View Project ▶️ {""}
                    </a>
                </div>
            </div>
        </div>
        </div>
                                    </RevealOnScroll>

    </section>
}