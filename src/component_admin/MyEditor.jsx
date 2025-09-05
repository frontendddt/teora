'use client';
 import { CKEditor } from '@ckeditor/ckeditor5-react';
 import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Upload adapter class
class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

    async upload() {
    const file = await this.loader.file;
    const formData = new FormData();
    formData.append('upload', file);

    try {
      const response = await fetch('/api/upload/ckeditor', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data?.message || 'Upload failed');
      }

      return {
        default: data.url, // Must be exactly "default"
      };
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  }

  abort() {
    // Optional: implement abort handling here
  }
}


// CKEditor Plugin Function
function uploadPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader);
  };
}
// Editor Component
const MyEditor = ({ editorData, setEditorData }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={editorData}
      onChange={(event, editor) => {
        const data = editor.getData();
        setEditorData(data);
      }}
      config={{
        extraPlugins: [uploadPlugin],
      }}
    />
  );
};

export default MyEditor;
