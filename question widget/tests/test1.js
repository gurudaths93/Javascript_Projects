import Answer from '../Models/Answer';

let ans =new Answer();

ans.addAnswer('q1',['option11','option21','option21']);
ans.addAnswer('q2',['option12','option22','option22']);

describe("Module should return", function () {
    it("some number", function () {
      expect(ans.getAnsweredQuestionsCount().toEqual(2));
    });
  });