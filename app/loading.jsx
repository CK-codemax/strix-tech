import Loader from './components/Loader'

export default function loading() {
  return (
   <div className='w-screen h-screen flex items-center justify-center'>
     <Loader />
   </div>
  )
}
