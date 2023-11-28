import { useState } from 'react';
import blogEntries from '../data/blogEntries.json';

export const BlogPage = () => {
  const [selectedBlogEntry, setSelectedBlogEntry] = useState(
    blogEntries.at(-1)
  );
  const { title, content } = selectedBlogEntry;
  return (
    <div className="blog">
      <h1>{title}</h1>
      {content.map((item, i) => (
        <>
          {item.type === 'img' && (
            <img src={item.url} alt={`${title} image`} key={i} />
          )}
          {item.type === 'sectionTitle' && <h2 key={i}>{item.content}</h2>}
          {item.type === 'body' && <p key={i}>{item.content}</p>}
        </>
      ))}
      <ul>
        {blogEntries.map((entry) => (
          <li key={entry.id} onClick={() => setSelectedBlogEntry(entry)}>
            <button className='track-selector'>{entry.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
