import { notFound } from 'next/navigation'

async function getNewsArticle(id: string) {
  // This is a mock function - replace with your actual data fetching logic
  const article = {
    id: '1',
    title: 'Sample News Article',
    content: 'This is a sample news article content.',
    date: '2024-01-20'
  }

  // Simulate article not found for testing
  if (id !== '1') {
    return null
  }

  return article
}

export default async function NewsArticlePage({
  params
}: {
  params: { id: string }
}) {
  const article = await getNewsArticle(params.id)

  if (!article) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <div className="text-gray-600 mb-4">
          {new Date(article.date).toLocaleDateString()}
        </div>
        <div className="mt-6">
          {article.content}
        </div>
      </article>
    </div>
  )
}