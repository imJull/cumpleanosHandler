import './Spinner.css'
import Button from '@mui/material/Button';


const StylesSpin = {
  btn:{
    background:"rgba(128, 128, 128, 0.836)"
  },
  t1:{
    fontWeight:"700",
    fontStyle:"italic"
  },
  t2:{
    
    fontStyle:"italic"
  }
}

const onReload = () => {
  window.location.reload()
}


const BtnReload = (
      
        <>
          <Button style={StylesSpin.btn} onClick={() => onReload()} type="submit" variant="contained">Recargar</Button>
        </>
    
)




const Spinner = ({title, title2}) => {
  return (
    <div>
      <p style={StylesSpin.t1}>{title}</p>
      <p style={StylesSpin.t2}>{title2}</p> <br/>
      <br/>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <br/>
      <br/>
      {BtnReload}
    </div>
  );
};

Spinner.defaultProps ={
  title: "Si los usuarios no se muestran, espere un momento",
  title2: "Si persiste la espera, pruebe recargando la página"
}

export default Spinner;
