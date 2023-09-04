import { toast } from 'react-toastify';

const notify = (text:string) =>
  toast(text, {
    position: 'bottom-right',
  });

const handleCopyToClipboard = (link:string) => {
  navigator.clipboard.writeText(link)
    .then(() => notify('Copied to clipboard'))
    .catch((err) => notify('Failed to copy to clipboard'));
};

export {handleCopyToClipboard,notify}