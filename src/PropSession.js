// import react and react dom
import React from 'react';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalButtons from './ApprovalButtons';

// create component
const PropSession = () => {
  return (
    <div className="ui comments">
      <ApprovalButtons>
        <CommentDetail
          author="samantha"
          time="7:00PM"
          text="text sample"
          avatar={faker.image.avatar()}
        />
      </ApprovalButtons>

      <ApprovalButtons>
        <CommentDetail
          author="sam"
          time="6:00PM"
          text="not gonna happen"
          avatar={faker.image.avatar()}
        />
      </ApprovalButtons>

      <ApprovalButtons>
        <CommentDetail
          author="alexis"
          time="5:00PM"
          text="Nice post for today"
          avatar={faker.image.avatar()}
        />
      </ApprovalButtons>
    </div>
  );
};

// const AppPropChildren = () => {
//   return (
//     <div>
//       {/* inject segmentwrap component to replace the divs */}
//       {/* <div className="ui placeholder segment"> */}
//       <SegmentWrap>
//         <div className="ui icon header">
//           <i className="pdf file outline icon" />
//           No documents are listed for this customer.
//         </div>
//         <div className="ui primary button">Add Document</div>
//       </SegmentWrap>

//       <SegmentWrap>
//         <h4 class="ui header">For Your Information</h4>
//         <p>
//           Pellentesque habitant morbi tristique senectus et netus et malesuada
//           fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
//           ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
//           egestas semper. Aenean ultricies mi vitae est. Mauris placerat
//           eleifend leo.
//         </p>
//       </SegmentWrap>
//     </div>
//   );
// };

// render component to DOM
export default PropSession;
