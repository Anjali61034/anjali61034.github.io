import { portfolioData } from '@/data/portfolio';
import BlogPostPage from './BlogPost';

// Pre-render every blog post for the static (GitHub Pages) build.
export function generateStaticParams() {
    return portfolioData.blogs.map((blog) => ({ slug: blog.slug }));
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
    return <BlogPostPage params={params} />;
}
