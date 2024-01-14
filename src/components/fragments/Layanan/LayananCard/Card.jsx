function CardTemplate(props) {
    const { title, src, alt, description } = props;

    return (
        <div className="flex flex-col items-center justify-between h-full">
            <div className='flex flex-col justify-center my-5 w-11/12 mx-auto'>
                <h2 className='text-center text-base font-semibold text-slate-800 mb-3'>{title}</h2>
                <img src={src} alt={alt} className='w-3/4 mx-auto rounded-md mb-2' />
                <p className='text-sm text-center'>{description}</p>
            </div>
            <a href="#" className='bg-slate-950 ring-1 ring-slate-950 lg:text-base text-xs p-2 px-4 rounded-full font-semibold text-slate-200 mb-2 hover:bg-slate-200 hover:text-slate-950 transition duration-500 w-fit'>informasi Lebih Lanjut</a>
        </div>
    )
}

function Card() {
    return (
        <div className="grid grid-cols-1 items-start lg:grid-cols-4 lg:gap-y-5 md:grid-cols-2">
            <CardTemplate
                title='Pengembangan Perangkat Lunak Khusus'
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt='losal'
                description="Solusi perangkat lunak unik yang dirancang khusus untuk memenuhi kebutuhan bisnis Anda, memberikan keberlanjutan dan inovasi."
                
            />
            <CardTemplate
                title='Konsultasi Teknologi'
                src='https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='losal'
                description="Panduan ahli dalam memilih dan menerapkan teknologi yang sesuai dengan tujuan bisnis Anda, dengan strategi yang efektif dan berkelanjutan."
            />
            <CardTemplate
                title='Pengelolaan Proyek'
                src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='losal'
                description="Pengelolaan proyek yang efisien, memastikan proyek berjalan sesuai rencana, anggaran, dan tenggat waktu."
            />
            <CardTemplate
                title='Integrasi Sistem'
                src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='losal'
                description="Layanan integrasi sistem untuk memastikan interoperabilitas yang mulus antara aplikasi dan platform."
            />
            <CardTemplate
                title='Pemeliharaan Perangkat Lunak'
                src='https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='losal'
                description="Pemantauan, pembaruan rutin, dan penanganan masalah untuk memastikan kinerja optimal perangkat lunak Anda."
            />
            <CardTemplate
                title='Keamanan Sistem'
                src='https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='losal'
                description="Fokus pada perlindungan data dan sistem bisnis Anda dari ancaman keamanan, dengan tindakan keamanan proaktif."
            />
            <CardTemplate
                title='Pengujian Perangkat Lunak'
                src='https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='losal'
                description="Pengujian komprehensif untuk memastikan kehandalan, kinerja, dan keamanan aplikasi Anda."
            />
            <CardTemplate
                title='Pengembangan Aplikasi Web dan Mobile'
                src='https://images.unsplash.com/photo-1601972602237-8c79241e468b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='losal'
                description="Desain responsif dan pengembangan aplikasi web dan mobile sesuai dengan kebutuhan dan tujuan bisnis Anda."
            />
        </div>
    );
}

export default Card