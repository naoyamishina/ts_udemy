type Props = { 
  name: string 
}

const PropsComponent = ({name}: Props) => {
  return (<> 
    <h2>Props</h2>
    { name }
  </>)}

export default PropsComponent
