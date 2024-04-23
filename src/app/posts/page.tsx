import ListPosts from "@/components/posts/ListPosts"
import Title from "@/ui/Title"


const PagePosts = async () => {

  return (
    <main className="container mx-auto pt-5 md:pt-16 md:w-[80%] lg:w-[70%]">
      <Title title={'Mascotas'} subtitle='Lista de Publicaciones' />
      <ListPosts  />
    </main>
  )
}

export default PagePosts