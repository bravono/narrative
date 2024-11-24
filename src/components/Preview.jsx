import Footer from "./Footer";
import Queue from "./Queue";
import Button from "./Button";
import BottomButton from "./BottomButton";
import FooterButton from "./FooterButton";

function Preview(classNameA) {
  return (
    <main className="main-container">
      <Queue className={"queue story"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum eaque
          quibusdam, dicta officia porro nam, cum fuga quidem modi doloribus!
          In, eveniet laboriosam pariatur totam assumenda fugit facere cumque.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          tempore itaque voluptate fugiat sapiente consequatur dolores iusto,
          aspernatur porro iure doloribus illo quam consequuntur error culpa
          minus eligendi animi labore? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Esse minima laborum dolorum, nobis harum delectus
          nam ipsum explicabo inventore ex nisi odio obcaecati porro iure
          accusamus eum molestiae doloremque magnam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ad eum eaque quibusdam, dicta officia
          porro nam, cum fuga quidem modi doloribus! In, eveniet laboriosam
          pariatur totam assumenda fugit facere cumque. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Molestiae tempore itaque voluptate
          fugiat sapiente consequatur dolores iusto, aspernatur porro iure
          doloribus illo quam consequuntur error culpa minus eligendi animi
          labore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
          minima laborum dolorum, nobis harum delectus nam ipsum explicabo
          inventore ex nisi odio obcaecati porro iure accusamus eum molestiae
          doloremque magnam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ad eum eaque quibusdam, dicta officia porro nam, cum fuga quidem
          modi doloribus! In, eveniet laboriosam pariatur totam assumenda fugit
          facere cumque. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Molestiae tempore itaque voluptate fugiat sapiente consequatur
          dolores iusto, aspernatur porro iure doloribus illo quam consequuntur
          error culpa minus eligendi animi labore? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Esse minima laborum dolorum, nobis harum
          delectus nam ipsum explicabo inventore ex nisi odio obcaecati porro
          iure accusamus eum molestiae doloremque magnam.
        </p>
      </Queue>
      <Button
        label="RETURN TO THE STORY"
        className={`${classNameA} footer_button`}
      />
    </main>
  );
}

export default Preview;
