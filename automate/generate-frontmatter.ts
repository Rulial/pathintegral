/* import fs from 'fs';
import path from 'path';
import matter from 'front-matter'


// --- Configuration ---
const BLOG_FOLDER_PATH = path.join(process.cwd(), 'blog'); // Adjust this path as needed
const FILE_EXTENSION = '.md'; // Or '.mdx' if you are renaming them
// ---------------------

const addMdxFrontmatter = (filePath: string): void => {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Check if the file already has frontmatter
    if (fileContent.startsWith('---')) {
      console.log(`Skipping file: ${path.basename(filePath)}. It already has frontmatter.`);
      return;
    }

    // Split the content into lines to parse the header
    const lines = fileContent.split('\n');
    const firstLine = lines[0].trim();

    // Regex to extract the title from the first line
    const titleMatch = firstLine.match(/^(.*?)—> Think Piece$/);
    const title = titleMatch ? titleMatch[1].trim() : firstLine;

    // Search for tags and number
    const tagsLine = lines.find(line => line.startsWith('Tags:'));
    const numberLine = lines.find(line => line.startsWith('Number:'));

    const tags = tagsLine ? tagsLine.replace('Tags:', '').trim().split(',').map(tag => tag.trim()) : [];
    const number = numberLine ? parseInt(numberLine.replace('Number:', '').trim(), 10) : undefined;

    // Remove the header lines from the original content
    const contentWithoutHeader = lines
      .slice(0) // Start with all lines
      .filter(line => !line.startsWith('#') && !line.startsWith('Tags:') && !line.startsWith('Number:'))
      .join('\n')
      .trim();

    // Construct the frontmatter object
    const frontmatter = {
      title,
      tags: tags.length > 0 ? tags : undefined,
      number: !isNaN(number as number) ? number : undefined,
    };
    
    // Use front-matter to create the new file content with frontmatter
    const newContent = matter.stringify(contentWithoutHeader, frontmatter);

    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Successfully added MDX frontmatter to: ${path.basename(filePath)}`);
  } catch (error) {
    console.error(`Failed to process file: ${filePath}`);
    console.error(error);
  }
};

const processBlogFolder = (dirPath: string): void => {
  if (!fs.existsSync(dirPath)) {
    console.error(`Blog folder not found at: ${dirPath}`);
    return;
  }

  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      processBlogFolder(filePath);
    } else if (filePath.endsWith(FILE_EXTENSION)) {
      addMdxFrontmatter(filePath);
    }
  });
};

// Start the process
processBlogFolder(BLOG_FOLDER_PATH);