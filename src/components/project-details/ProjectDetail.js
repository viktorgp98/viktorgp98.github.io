import 'ProjectDetail.css'
class ProjectDetail extends Component {
    render() {
        return (
            <div class="container">
            <div class="row my-4 text-center">
                <h1 class="mb-5"> Titulo</h1>
                <div class="card">
                    <img src="" />
                </div>
            </div>
            <div class="row justify-content-start">
                <div class="col-4">
                    <h3>Detalles</h3>
                    <p>Descripcion larga</p>
                </div>
                <div class="col-7">
                    <h3>Rol</h3>
                    <p>Descripcion</p>
                </div>
            </div>
        </div>
        );
    }
}
export default ProjectDetail;