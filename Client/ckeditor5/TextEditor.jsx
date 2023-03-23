import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



export default function TextEditor() {
    function uploadAdapter(loader) {
        return {
            upload: () => {
                return new Promise((resolve, reject) => {
                    const body = new FormData();
                    loader.file.then((file) => {
                        body.append("files", file);
                        // let headers = new Headers();
                        // headers.append("Origin", "http://localhost:3000");
                        fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
                            method: "post",
                            body: body
                            // mode: "no-cors"
                        })
                            .then((res) => res.json())
                            .then((res) => {
                                resolve({
                                    default: `${API_URL}/${res.filename}`
                                });
                            })
                            .catch((err) => {
                                reject(err);
                            });
                    });
                });
            }
        };
    }
    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return uploadAdapter(loader);
        };
    }
    // const editorConfiguration = {
    //     toolbar: {
    //         items: [
    //             'heading',
    //             "|",
    //             "bold",
    //             "italic",
    //             "link",
    //             "bulletedList",
    //             "numberedList",
    //             "|",
    //             "ImageUpload",
    //             "undo",
    //             "redo",
    //             "fontFamily",
    //             "htmlEmbed",
    //         ]
    //     },
    //     language: 'en',
    //     table: {
    //         contentToolbar: [
    //             "tableColumn",
    //             "tableRow",
    //             "mergeTableCells"
    //         ]
    //     }
    // };
    return (
        <>
            <CKEditor
                editor={ClassicEditor}
                config={{extraPlugins: [uploadPlugin]}}
                data="<p>Hello from CKEditor</p>"
                onchange={(event, editor) => {
                    // const data = editor.getData();
                    // console.log(data);
                }}
            />
        </>
    )
}
