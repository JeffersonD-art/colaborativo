import Factory from '@mui/icons-material/Factory'

const Logo = () => {
  return (
  <>
  <div className='flex flex-row items-center'>
    <div className='mr-4'>
      <Factory
        fontSize="large"
        sx={{ color: '#3898ec' }}
      />
    </div>
    <p className='capitalize font-sans leading-7 font-bold text-lg text-colorPrimary' >colaborativo | logistica y distribucion</p>
  </div>
  </>
  )
}

export default Logo
