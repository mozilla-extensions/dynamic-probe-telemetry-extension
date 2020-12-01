browser.telemetry.registerScalars("dynamic.probe", {
    "counter_scalar": {
        kind: "count",
        keyed: false,
        record_on_release: true
    },
});
browser.telemetry.scalarSet("dynamic.probe.counter_scalar", 1337);