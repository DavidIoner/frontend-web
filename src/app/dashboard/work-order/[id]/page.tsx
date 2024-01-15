interface WorkOrderProps {
    params: {
        id: string
    }
}


export default function WorkOrder({params}: WorkOrderProps) {
    return(
        <h1>Ordem de serviço id: { params.id }</h1>
    )
}