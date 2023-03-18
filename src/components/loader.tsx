import { ProgressSpinner } from 'primereact/progressspinner';

 const LoadingCompnent  = () => {
    return  <ProgressSpinner style={{width: '50px', height: '50px', top: '40%'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>
}

export default LoadingCompnent;