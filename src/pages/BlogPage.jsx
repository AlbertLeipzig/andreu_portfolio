import { useState } from 'react';
const blogEntries = [
  {
    id: 0,
    title: 'First Blog Entry',
    content: [
      {
        type: 'img',
        url: 'https://images.unsplash.com/photo-1701077137611-9be394bf62f0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        type: 'sectionTitle',
        content: 'Primera Secció',
      },
      {
        type: 'body',
        content:
          'In the heart of the bustling city, where neon lights paint the night sky, a mysterious energy lingers. People rush by, chasing dreams in a concrete jungle. Each step echoes a story, unheard yet profound. Amidst the chaos, whispers of untold adventures fill the air.',
      },
      {
        type: 'sectionTitle',
        content: 'Segona Secció',
      },
      {
        type: 'body',
        content:
          'The sun dipped below the horizon, casting hues of pink and gold across the tranquil lake. Rippling reflections danced on the waters surface, a serene ballet orchestrated by nature. A gentle breeze carried the scent of pine, as the world embraced the quiet magic of twilight.',
      },
      {
        type: 'sectionTitle',
        content: 'Tercera Secció',
      },
      {
        type: 'body',
        content:
          'Lost in the pages of an old book, time seems to stand still. Words weave a tapestry of imagination, transporting readers to realms unknown. Characters come alive, and dreams take flight. In the realm of stories, possibilities are endless, and every sentence holds a universe waiting to be explored.',
      },
      {
        type: 'img',
        url: 'https://images.unsplash.com/photo-1701077136756-3b8439292118?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
      },
    ],
  },
];
export const BlogPage = () => {
  const [selectedBlogEntry, setSelectedBlogEntry] = useState(blogEntries.at(-1));
  const { title, content } = selectedBlogEntry;
  return (
    <div className="blog">
      <h1>{title}</h1>
      {content.map((item) => (
        <>
          {item.type === 'img' && <img src={item.url} alt={`${title} image`} />}
          {item.type === 'sectionTitle' && <h2>{item.content}</h2>}
          {item.type === 'body' && <p>{item.content}</p>}
        </>
      ))}

    </div>
  );
};
º