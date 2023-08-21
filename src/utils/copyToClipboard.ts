import { toast } from 'react-toastify';

const notify = () =>
  toast('copied to clipboard', {
    position: 'bottom-center',
  });

const handleCopyToClipboard = (link:string) => {
  navigator.clipboard.writeText(link);
  notify();
};

export {handleCopyToClipboard}