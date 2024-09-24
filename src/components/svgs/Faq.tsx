import React from 'react';

const FAQIcon: React.FC<{ size?: number }> = ({ size = 70 }) => {
  return (
    
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="#FF0000"
          display="inline-block"
        >
          <path d="M12 1a11 11 0 1011 11A11.013 11.013 0 0012 1zm0 20a9 9 0 119-9 9.011 9.011 0 01-9 9zm1-4.5v2h-2v-2zm3-7a3.984 3.984 0 01-1.5 3.122A3.862 3.862 0 0013.063 15h-2.032a5.813 5.813 0 012.219-3.936 2 2 0 00-.15-3.232 2.057 2.057 0 00-2-.14A1.939 1.939 0 0010 9.5a1 1 0 01-2 0 3.909 3.909 0 012.319-3.647 4.061 4.061 0 013.889.315A4 4 0 0116 9.5z"></path>
        
    </svg>
  );
};

export default FAQIcon;