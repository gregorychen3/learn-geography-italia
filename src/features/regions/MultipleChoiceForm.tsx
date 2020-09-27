import { FormControlLabel, Grid, Radio } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Field, Form, Formik } from "formik";
import { RadioGroup } from "formik-material-ui";
import * as React from "react";

interface Values {
  selection: string;
}

interface Props {
  opts: string[];
}
export default function MultipleChoiceForm({ opts }: Props) {
  return (
    <Formik initialValues={{ selection: "" }} onSubmit={() => {}}>
      {({ isSubmitting }) => (
        <Form>
          <Grid container direction="row" justify="flex-end" alignItems="flex-start">
            <Grid item xs={12}>
              <Field component={RadioGroup} name="activity">
                {opts.map((r) => (
                  <FormControlLabel
                    value={r}
                    control={<Radio disabled={isSubmitting} />}
                    label={r}
                    disabled={isSubmitting}
                  />
                ))}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="secondary" disabled={isSubmitting}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
