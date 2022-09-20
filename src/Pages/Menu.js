import React from 'react'
import Card from '../components/Card'
import Data from '../Data/Data'

export default function Menu({handleClick}) {
    const [fill, setFill] = React.useState([])
    const [type, setType] = React.useState()

    React.useEffect(() => {
        setFill(Data)
    }, [])
    
    const getFilter = () => {
        if(!type) return fill
        return fill.filter((data) => data.type === type)
    }
    
    const handleFilter = (e) => {
        setType(e.target.value)
    }

    const dataFilter = React.useMemo(getFilter, [type, fill])
    return (
    <div className="px-10 pb-5">
        <div className="bg-gray-700 rounded-xl p-5">
            <div className="flex items-center justify-between py-4">
                <h1 className='text-2xl text-gray-100'>Product</h1>
                <select onChange={handleFilter} className='text-2xl bg-gray-500 p-1.5 rounded-lg text-gray-100'>
                    <option value="">All</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Fresh Water">Fresh Water</option>
                    <option value="Food">Food</option>
                    <option value="Closing Menu">Closing Menu</option>
                </select>
            </div>
            <div className="block gap-y-8 lg:grid lg:grid-cols-4 lg:gap-3">
                { dataFilter.map((data) => <Card key={data.id} item={data} handleClick={handleClick}/>)}
            </div>
        </div>
    </div>
  )
}