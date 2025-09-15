import fs from 'fs';
import path from 'path';
import fm from 'front-matter'; // Corrected import
import yaml from 'js-yaml'; // You'll need a YAML stringifier

// --- Configuration ---
const BLOG_FOLDER_PATH = path.join(process.cwd(), 'blog');
const FILE_EXTENSION = '.md';
// ---------------------

const addMdxFrontmatter = (filePath: string): void => {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Check if the file already has frontmatter
    if (fm.test(fileContent)) {
      console.log(`Skipping file: ${path.basename(filePath)}. It already has frontmatter.`);
      return;
    }
    const lines = fileContent.split('\n');

    const firstNonEmptyLine = lines.find(line => line.trim().length > 0);
    //love
    if (!firstNonEmptyLine) {
      console.warn(`File is empty or has no content: ${path.basename(filePath)}`);
      return;
    }

    const titleMatch = firstNonEmptyLine.match(/^(.*?)# HOW DO YOU TECHNOLOGY?—> Think Piece$/);
    const title = titleMatch ? titleMatch[1].trim() : firstNonEmptyLine.trim();

    const tagsLine = lines.find(line => line.startsWith('Tags:'));
    const numberLine = lines.find(line => line.startsWith('Number:'));

    const tags = tagsLine ? tagsLine.replace('Tags:', '').trim().split(',').map(tag => tag.trim()) : [];
    const number = numberLine ? parseInt(numberLine.replace('Number:', '').trim(), 10) : undefined;

    // Filter out the header lines
    const contentWithoutHeader = lines
      .filter(line => !line.trim().startsWith('#') && !line.trim().startsWith('Tags:') && !line.trim().startsWith('Number:'))
      .join('\n')
      .trim();

    // Construct the frontmatter object
    const frontmatter = {
      title,
      tags: tags.length > 0 ? tags : undefined,
      number: (number !== undefined && !isNaN(number)) ? number : undefined,
    };
    
    // Convert the frontmatter object to a YAML string
    const yamlString = yaml.dump(frontmatter);

    // Manually construct the new file content string
    const newContent = `---\n${yamlString}---\n\n${contentWithoutHeader}`;

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
      processBlogFolder(filePath);
    } else if (filePath.endsWith(FILE_EXTENSION)) {
      addMdxFrontmatter(filePath);
    }
  });
};

// Start the process
processBlogFolder(BLOG_FOLDER_PATH);