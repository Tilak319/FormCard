import { StackView, Typography, Icon, Box, Spacer } from "@telus-uds/ds-allium";
import { Speed } from '@telus-uds/palette-allium/build/web/icons'

export default function PlanDetails() {

  const loaddata = [
    {
      id: 1,
      text: "download speed",
      speed: "300 Mbps",
    },
    {
      id: 2,
      text: "upload speed",
      speed: "300 Mbps",
    },
    {
      id: 3,
      text: "monthly usage",
      speed: "1000 GB",
    },
    {
      id: 4,
      text: "streaming or gaming",
      speed: "1-6 devices",
    },
  ]

  return (
    <>
      {loaddata.map((data) => (
        <Box key={data.id}>

          <StackView direction="row" space={2}>
            <Box vertical={2}>
              <Icon icon={Speed} />
            </Box>
            <Box left={2}>
              <Typography
                tokens={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: 'rgb(65, 69, 71);'
                }}
              >
                <b>{data.speed}</b>
              </Typography>
              <Typography tokens={{
                fontSize: 18,
                fontWeight: 500
              }}>
                {data.text}</Typography>

              <Spacer space={3} />
            </Box>
          </StackView>
        </Box>
      ))}
    </>
  );
}

