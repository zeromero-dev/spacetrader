function Header() {
    return (
        <div className='w-full h-24 border-2 border-slate-900 rounded-sm '>
            <a href='/'>
                Home
            </a>
            {' '}
            <a href='/contracts'>
                Contracts
            </a>
            {' '}
            <a href='/extract'>
              ExtractOre  
            </a>
        </div>
    )
}

export default Header