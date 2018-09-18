export const defaultHistories = [
  {
    status: '0',
    deskCode: '1',
    requestDivisionValue: '1',
    uketsukeNumber: '0001',
    requestDate: '2018/09/19',
    message: {
      body: {
        messages: [
          [
            { text: '文字列1', red: false, bold: false, href: null },
            { text: '文字列2', red: false, bold: true, href: null },
          ],
          [{ text: 'リンク文字列', red: false, bold: false, href: 'http://google.com' }],
        ],
      },
      header: {
        messages: [
          [
            { text: '文字列1', red: false, bold: false, href: null },
            { text: '文字列2', red: false, bold: true, href: null },
          ],
          [{ text: '文字列3', red: false, bold: false }],
        ],
      },
    },
  },
];
