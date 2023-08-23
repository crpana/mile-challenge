
export default async function ItemPage({ params: { id } }: { params: { id: string } }) {

    console.log(id)

    const item = await fetch(`https://api.mercadolibre.com/items/${id}`)
        .then(res => res.json() as Promise<{
            id: string;
            title: string;
            thumbnail: string;
            price: number;
            currency_id: string;
        }>);

    const { plain_text } = await fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then(res => res.json() as Promise<{
            plain_text: string;
        }>)
  

    // console.log(plain_text)
    return (
        <section className="grid gap-4">
            <img src={item.thumbnail}></img>
            <p>{item.title}</p>
            <p>{Number(item.price).toLocaleString('es-AR', { style: 'currency', currency: item.currency_id })}</p>

            <hr></hr>
            <p>{plain_text}</p>
        </section>
    )
}